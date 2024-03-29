// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {ERC4626, ERC20} from "./solmate/src/mixins/ERC4626.sol";
import {SafeTransferLib} from "./solmate/src/utils/SafeTransferLib.sol";

contract stakedLADDER is ERC4626 {
    constructor(ERC20 token_) ERC4626(token_, "stakedLADDER", "stakedLADDER") {}

    function totalAssets() public view override returns (uint256) {
        return asset.balanceOf(address(this));
    }

    function beforeWithdraw(uint256 assets, uint256 shares) internal override {
        super.beforeWithdraw(assets, shares);
    }

    function afterDeposit(uint256 assets, uint256 shares) internal override {
        super.afterDeposit(assets, shares);
    }
}
