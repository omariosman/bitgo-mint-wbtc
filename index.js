import { BitGoAPI } from '@bitgo/sdk-api';
import dotenv from "dotenv";

dotenv.config();

const bitgo = new BitGoAPI({ env: 'test' });
const auth_res = await bitgo.authenticate({
  username: process.env.BITGO_USERNAME,
  password: process.env.PASS,
  otp: "000000",
});

const access_token = await bitgo.addAccessToken({
  otp: "000000",
  label: "Admin Access Token",
  scope: [
    "crypto_compare", // Use CryptoCompare API
    "metamask_institutional", //  Use MetaMask Institutional
    "openid", // Verify your BitGo user ID
    "pending_approval_update", // Update pending approvals
    "profile", // View your BitGo profile
    "private_verify_email",
    "settlement_network_read", // Let's partners engage in allocations with clients
    "settlement_network_write", // Let's partners engage in allocations with clients
    "trade_trade", // Make trades
    "trade_view", // View trades
    "user_manage", // Manage your entire BitGo account
    "wallet_approve", // Approve transactions for a wallet
    "wallet_approve_all", // Approve transactions for all wallets
    "wallet_create", // Create wallets
    "wallet_edit", // Edit wallet comments
    "wallet_edit_all", // Edit comments for all wallets
    "wallet_edit_enterprise", // Edit enterprise comments
    "wallet_freeze", // Freeze a wallets
    "wallet_freeze_all", // Freeze all wallets
    "wallet_manage", // Manage settings for a wallet
    "wallet_manage_all", // Manage settings for all wallets (required to use webhooks)
    "wallet_manage_enterprise", // Manage enterprise settings
    "wallet_spend", // Send transactions from a wallet
    "wallet_spend_all", // Send transactions from a wallet
    "wallet_spend_enterprise", // Spend enterprise transactions
    "wallet_view", // View transactions for a wallet
    "wallet_view_all", // View transactions for all wallets
    "wallet_view_enterprise" // View enterprise transactions
    ],
  // Optional: Set a spending limit
  spendingLimits: [
    {
      coin: "tbtc4",
      txValueLimit: "1000000000", // 10 TBTC4 (10 * 1e8)
    },
  ],
});
console.log(access_token);
