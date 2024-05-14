// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./PlatformToken.sol";

contract FeedbackPlatform {
    address public owner;
    PlatformToken private rewardToken;
    struct Issue {
        uint256 issueId;
        string title;
        string description;
        string companyName;
        bool status; // true for accepted, false for rejected
        address creater;
        uint amountStaked;
        bool viewAccess;
    }

    struct User {
        uint256 numberOfIssues;
        uint256 rejectedIssues;
        uint256 acceptedIssues;
        uint256 totalBalance;
    }

    mapping(address => Issue[]) public issues;
    mapping(uint256 => Issue) public issueIdToIssue;
    mapping(address => User) public users;
    mapping(address => bool) private isRegistered;
    uint256 public totalIssues;

    event IssueRegistered(
        uint256 issueId,
        string title,
        string companyName,
        bool status
    );
    event IssueStatusUpdated(uint256 issueId, bool newStatus);
    event UserRegistered(address user);

    modifier notUser() {
        require(
            !isRegistered[msg.sender],
            "Only the owner can call this function"
        );
        _;
    }

    constructor(address _loyalityTokenAddress) {
        owner = msg.sender;
        rewardToken = PlatformToken(_loyalityTokenAddress);
        rewardToken.mint(address(this), 10000000000);
    }

    function registerUser() external {
        require(!isRegistered[msg.sender], "User already registered");
        users[msg.sender].numberOfIssues = 0;
        users[msg.sender].rejectedIssues = 0;
        users[msg.sender].acceptedIssues = 0;
        users[msg.sender].totalBalance = 0;
        require(
            (rewardToken).transfer(msg.sender, 100 * (10 ** 18)),
            "Transfer Failed"
        );
        emit UserRegistered(msg.sender);
        isRegistered[msg.sender] = true;
    }

    function registerIssue(
        string memory _title,
        string memory _description,
        string memory _companyName,
        uint holdAmount
    ) external {
        require(holdAmount > 0, "Amount must be greater than 0");
        
        rewardToken.transferFrom(msg.sender, address(this), holdAmount);
        // Stake Some Tokens Based on Confidence Level

        totalIssues++;
        Issue memory newIssue = Issue({
            issueId: totalIssues,
            title: _title,
            description: _description,
            companyName: _companyName,
            status: false,
            creater: msg.sender,
            amountStaked: holdAmount,
            viewAccess: false
        });

        users[msg.sender].numberOfIssues++;
        issues[msg.sender].push(newIssue);
        issueIdToIssue[totalIssues] = newIssue;
        emit IssueRegistered(totalIssues, _title, _companyName, false);
    }

    function viewIssue(uint256 _issueId) external notUser {
        require(_issueId <= totalIssues, "Invalid issue ID");
        Issue storage currentIssue = issueIdToIssue[_issueId];

        rewardToken.transferFrom(
            msg.sender,
            address(this),
            issueIdToIssue[_issueId].amountStaked * (10 ** 18)
        );

        currentIssue.viewAccess = true;
    }

    function updateIssueStatus(
        uint256 _issueId,
        bool _newStatus
    ) external notUser {
        require(_issueId <= totalIssues, "Invalid issue ID");

        Issue storage currentIssue = issueIdToIssue[_issueId];
        currentIssue.status = _newStatus;

        if (_newStatus) {
            users[currentIssue.creater].acceptedIssues++;
            require(
                (rewardToken).transfer(
                    currentIssue.creater,
                    ((issueIdToIssue[_issueId].amountStaked * 15) / 10) *
                        (10 ** 18)
                ),
                "Transfer Failed"
            );
        } else {
            users[currentIssue.creater].rejectedIssues++;
            require(
                (rewardToken).transfer(
                    currentIssue.creater,
                    (issueIdToIssue[_issueId].amountStaked) * (10 ** 18)
                ),
                "Transfer Failed"
            );
            require(
                (rewardToken).transfer(
                    msg.sender,
                    (issueIdToIssue[_issueId].amountStaked) * (10 ** 18)
                ),
                "Transfer Failed"
            );
        }

        emit IssueStatusUpdated(_issueId, _newStatus);
    }

    function getIssues() external view returns (Issue[] memory) {
        return issues[msg.sender];
    }

    function getUserData() external view returns (User memory) {
        return users[msg.sender];
    }

    function claimTokens(uint amount) public returns (bool) {
        rewardToken.burn(amount * (10 ** 18));
        users[msg.sender].totalBalance += amount;
        return true;
    }
}
