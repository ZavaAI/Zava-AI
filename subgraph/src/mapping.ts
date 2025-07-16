import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import {
  AgentCreated,
  ModuleActivated,
} from "../generated/ZavaAIAgentCore/ZavaAIAgentCore";
import { Transfer } from "../generated/ZavaAIToken/ZavaAIToken";
import { User, Agent, ZAVATokenTransfer } from "../generated/schema";
export function handleAgentCreated(event: AgentCreated): void {
  let user = User.load(event.params.owner.toHexString());
  if (!user) {
    user = new User(event.params.owner.toHexString());
    // Initialize other user fields
    user.save();
  }
  let agentt = new Agent(event.params.agentId.toHexString());
  agent.owner = user.id;
  agent.status = "Active";
  agent.activatedModules = []; // Initialize as empty array
  // ... set other agent fields
  agent.save();
}
export function handleTransfer(event: Transfer): void {
  let transfer = new ZAVATokenTransfer(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  );
  transfer.from = event.params.from;
  transfer.to = event.params.to;
  transfer.value = event.params.value;
  transfer.timestamp = event.block.timestamp;
  transfer.blockNumber = event.block.number;
  transfer.save();
  // Update user balances or create users if needed
  let fromUser = User.load(event.params.from.toHexString());
  if (!fromUser) {
    fromUser = new User(event.params.from.toHexString());
    fromUser.save();
  }
  let toUser = User.load(event.params.to.toHexString());
  if (!toUser) {
    toUser = new User(event.params.to.toHexString());
    toUser.save();
  }
}
