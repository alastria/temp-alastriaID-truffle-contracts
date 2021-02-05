/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Eidas } from "../Eidas";

export class Eidas__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Eidas> {
    return super.deploy(overrides || {}) as Promise<Eidas>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Eidas {
    return super.attach(address) as Eidas;
  }
  connect(signer: Signer): Eidas__factory {
    return super.connect(signer) as Eidas__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Eidas {
    return new Contract(address, _abi, signerOrProvider) as Eidas;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "enum Eidas.EidasLevel",
        name: "_eidasLevel",
        type: "Eidas.EidasLevel",
      },
      {
        internalType: "enum Eidas.EidasLevel",
        name: "_level",
        type: "Eidas.EidasLevel",
      },
    ],
    name: "atLeast",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum Eidas.EidasLevel",
        name: "_eidasLevel",
        type: "Eidas.EidasLevel",
      },
    ],
    name: "atLeastLow",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x61011c610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106059577c010000000000000000000000000000000000000000000000000000000060003504630fa78bf78114605e578063f264148314608f575b600080fd5b607b60048036036020811015607257600080fd5b503560ff1660b4565b604080519115158252519081900360200190f35b607b6004803603604081101560a357600080fd5b5060ff8135811691602001351660c5565b600060bf82600260c5565b92915050565b600081600481111560d257fe5b83600481111560dd57fe5b1015939250505056fea26469706673582212201d5e487d2ade674ce4b8b9fada1507804724d11cdef30fc9258117115145091664736f6c63430007060033";