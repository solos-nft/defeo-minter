// SPDX-License-Identifier: GPL-3.0

/// @title Minter for ERC721DAOToken, selling tokens at a fixed price.

pragma solidity ^0.8.6;

import { ERC721Minter } from "./ERC721Minter.sol";

abstract contract FixedPriceFixedSupplyMinter is ERC721Minter {
    uint256 public maxTokens;
    uint256 public tokenPrice;

    bool public isMaxTokensLocked;
    bool public isTokenPriceLocked;

    function __FixedPriceFixedSupplyMinter_init(uint256 maxTokens_, uint256 tokenPrice_) internal initializer {
        maxTokens = maxTokens_;
        tokenPrice = tokenPrice_;
    }

    function setMaxTokens(uint256 maxTokens_) external onlyRole(CREATOR_ROLE) {
        require(!isMaxTokensLocked, "FixedPriceFixedSupplyMinter: maxTokens is locked");
        maxTokens = maxTokens_;
    }

    function lockMaxTokens() external onlyRole(CREATOR_ROLE) {
        isMaxTokensLocked = true;
    }

    function setTokenPrice(uint256 tokenPrice_) external onlyRole(CREATOR_ROLE) {
        require(!isTokenPriceLocked, "FixedPriceFixedSupplyMinter: tokenPrice is locked");
        tokenPrice = tokenPrice_;
    }

    function lockTokenPrice() external onlyRole(CREATOR_ROLE) {
        isTokenPriceLocked = true;
    }
}
