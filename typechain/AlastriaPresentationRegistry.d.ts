/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface AlastriaPresentationRegistryInterface extends ethers.utils.Interface {
  functions: {
    "addSubjectPresentation(bytes32,string)": FunctionFragment;
    "getPresentationStatus(uint8,uint8)": FunctionFragment;
    "getReceiverPresentationStatus(address,bytes32)": FunctionFragment;
    "getSubjectPresentationList(address)": FunctionFragment;
    "getSubjectPresentationStatus(address,bytes32)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "previousPublishedVersion()": FunctionFragment;
    "subjectPresentationListRegistry(address,uint256)": FunctionFragment;
    "subjectPresentationRegistry(address,bytes32)": FunctionFragment;
    "updateReceiverPresentation(bytes32,uint8)": FunctionFragment;
    "updateSubjectPresentation(bytes32,uint8)": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addSubjectPresentation",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPresentationStatus",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceiverPresentationStatus",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSubjectPresentationList",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getSubjectPresentationStatus",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "previousPublishedVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "subjectPresentationListRegistry",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "subjectPresentationRegistry",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateReceiverPresentation",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateSubjectPresentation",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addSubjectPresentation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPresentationStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceiverPresentationStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubjectPresentationList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubjectPresentationStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "previousPublishedVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "subjectPresentationListRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "subjectPresentationRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateReceiverPresentation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateSubjectPresentation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "PresentationUpdated(bytes32,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PresentationUpdated"): EventFragment;
}

export class AlastriaPresentationRegistry extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: AlastriaPresentationRegistryInterface;

  functions: {
    addSubjectPresentation(
      subjectPresentationHash: BytesLike,
      URI: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addSubjectPresentation(bytes32,string)"(
      subjectPresentationHash: BytesLike,
      URI: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getPresentationStatus(
      subjectStatus: BigNumberish,
      receiverStatus: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "getPresentationStatus(uint8,uint8)"(
      subjectStatus: BigNumberish,
      receiverStatus: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getReceiverPresentationStatus(
      receiver: string,
      receiverPresentationHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, number] & { exists: boolean; status: number }>;

    "getReceiverPresentationStatus(address,bytes32)"(
      receiver: string,
      receiverPresentationHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, number] & { exists: boolean; status: number }>;

    getSubjectPresentationList(
      subject: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string[]]>;

    "getSubjectPresentationList(address)"(
      subject: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string[]]>;

    getSubjectPresentationStatus(
      subject: string,
      subjectPresentationHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, number] & { exists: boolean; status: number }>;

    "getSubjectPresentationStatus(address,bytes32)"(
      subject: string,
      subjectPresentationHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, number] & { exists: boolean; status: number }>;

    initialize(
      _previousPublishedVersion: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address)"(
      _previousPublishedVersion: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    previousPublishedVersion(overrides?: CallOverrides): Promise<[string]>;

    "previousPublishedVersion()"(overrides?: CallOverrides): Promise<[string]>;

    subjectPresentationListRegistry(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "subjectPresentationListRegistry(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    subjectPresentationRegistry(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, number, string] & {
        exists: boolean;
        status: number;
        URI: string;
      }
    >;

    "subjectPresentationRegistry(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, number, string] & {
        exists: boolean;
        status: number;
        URI: string;
      }
    >;

    updateReceiverPresentation(
      receiverPresentationHash: BytesLike,
      status: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateReceiverPresentation(bytes32,uint8)"(
      receiverPresentationHash: BytesLike,
      status: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateSubjectPresentation(
      subjectPresentationHash: BytesLike,
      status: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateSubjectPresentation(bytes32,uint8)"(
      subjectPresentationHash: BytesLike,
      status: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;

    "version()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  addSubjectPresentation(
    subjectPresentationHash: BytesLike,
    URI: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addSubjectPresentation(bytes32,string)"(
    subjectPresentationHash: BytesLike,
    URI: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getPresentationStatus(
    subjectStatus: BigNumberish,
    receiverStatus: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  "getPresentationStatus(uint8,uint8)"(
    subjectStatus: BigNumberish,
    receiverStatus: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getReceiverPresentationStatus(
    receiver: string,
    receiverPresentationHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<[boolean, number] & { exists: boolean; status: number }>;

  "getReceiverPresentationStatus(address,bytes32)"(
    receiver: string,
    receiverPresentationHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<[boolean, number] & { exists: boolean; status: number }>;

  getSubjectPresentationList(
    subject: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string[]]>;

  "getSubjectPresentationList(address)"(
    subject: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string[]]>;

  getSubjectPresentationStatus(
    subject: string,
    subjectPresentationHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<[boolean, number] & { exists: boolean; status: number }>;

  "getSubjectPresentationStatus(address,bytes32)"(
    subject: string,
    subjectPresentationHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<[boolean, number] & { exists: boolean; status: number }>;

  initialize(
    _previousPublishedVersion: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address)"(
    _previousPublishedVersion: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  previousPublishedVersion(overrides?: CallOverrides): Promise<string>;

  "previousPublishedVersion()"(overrides?: CallOverrides): Promise<string>;

  subjectPresentationListRegistry(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "subjectPresentationListRegistry(address,uint256)"(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  subjectPresentationRegistry(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [boolean, number, string] & { exists: boolean; status: number; URI: string }
  >;

  "subjectPresentationRegistry(address,bytes32)"(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [boolean, number, string] & { exists: boolean; status: number; URI: string }
  >;

  updateReceiverPresentation(
    receiverPresentationHash: BytesLike,
    status: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateReceiverPresentation(bytes32,uint8)"(
    receiverPresentationHash: BytesLike,
    status: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateSubjectPresentation(
    subjectPresentationHash: BytesLike,
    status: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateSubjectPresentation(bytes32,uint8)"(
    subjectPresentationHash: BytesLike,
    status: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  "version()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    addSubjectPresentation(
      subjectPresentationHash: BytesLike,
      URI: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addSubjectPresentation(bytes32,string)"(
      subjectPresentationHash: BytesLike,
      URI: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getPresentationStatus(
      subjectStatus: BigNumberish,
      receiverStatus: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "getPresentationStatus(uint8,uint8)"(
      subjectStatus: BigNumberish,
      receiverStatus: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getReceiverPresentationStatus(
      receiver: string,
      receiverPresentationHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, number] & { exists: boolean; status: number }>;

    "getReceiverPresentationStatus(address,bytes32)"(
      receiver: string,
      receiverPresentationHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, number] & { exists: boolean; status: number }>;

    getSubjectPresentationList(
      subject: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string[]]>;

    "getSubjectPresentationList(address)"(
      subject: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string[]]>;

    getSubjectPresentationStatus(
      subject: string,
      subjectPresentationHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, number] & { exists: boolean; status: number }>;

    "getSubjectPresentationStatus(address,bytes32)"(
      subject: string,
      subjectPresentationHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, number] & { exists: boolean; status: number }>;

    initialize(
      _previousPublishedVersion: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address)"(
      _previousPublishedVersion: string,
      overrides?: CallOverrides
    ): Promise<void>;

    previousPublishedVersion(overrides?: CallOverrides): Promise<string>;

    "previousPublishedVersion()"(overrides?: CallOverrides): Promise<string>;

    subjectPresentationListRegistry(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "subjectPresentationListRegistry(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    subjectPresentationRegistry(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, number, string] & {
        exists: boolean;
        status: number;
        URI: string;
      }
    >;

    "subjectPresentationRegistry(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, number, string] & {
        exists: boolean;
        status: number;
        URI: string;
      }
    >;

    updateReceiverPresentation(
      receiverPresentationHash: BytesLike,
      status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateReceiverPresentation(bytes32,uint8)"(
      receiverPresentationHash: BytesLike,
      status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateSubjectPresentation(
      subjectPresentationHash: BytesLike,
      status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateSubjectPresentation(bytes32,uint8)"(
      subjectPresentationHash: BytesLike,
      status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    "version()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    PresentationUpdated(hash: null, status: null): EventFilter;
  };

  estimateGas: {
    addSubjectPresentation(
      subjectPresentationHash: BytesLike,
      URI: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addSubjectPresentation(bytes32,string)"(
      subjectPresentationHash: BytesLike,
      URI: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getPresentationStatus(
      subjectStatus: BigNumberish,
      receiverStatus: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPresentationStatus(uint8,uint8)"(
      subjectStatus: BigNumberish,
      receiverStatus: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReceiverPresentationStatus(
      receiver: string,
      receiverPresentationHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getReceiverPresentationStatus(address,bytes32)"(
      receiver: string,
      receiverPresentationHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSubjectPresentationList(
      subject: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSubjectPresentationList(address)"(
      subject: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSubjectPresentationStatus(
      subject: string,
      subjectPresentationHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSubjectPresentationStatus(address,bytes32)"(
      subject: string,
      subjectPresentationHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _previousPublishedVersion: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address)"(
      _previousPublishedVersion: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    previousPublishedVersion(overrides?: CallOverrides): Promise<BigNumber>;

    "previousPublishedVersion()"(overrides?: CallOverrides): Promise<BigNumber>;

    subjectPresentationListRegistry(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "subjectPresentationListRegistry(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    subjectPresentationRegistry(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "subjectPresentationRegistry(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateReceiverPresentation(
      receiverPresentationHash: BytesLike,
      status: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateReceiverPresentation(bytes32,uint8)"(
      receiverPresentationHash: BytesLike,
      status: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateSubjectPresentation(
      subjectPresentationHash: BytesLike,
      status: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateSubjectPresentation(bytes32,uint8)"(
      subjectPresentationHash: BytesLike,
      status: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    "version()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addSubjectPresentation(
      subjectPresentationHash: BytesLike,
      URI: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addSubjectPresentation(bytes32,string)"(
      subjectPresentationHash: BytesLike,
      URI: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getPresentationStatus(
      subjectStatus: BigNumberish,
      receiverStatus: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPresentationStatus(uint8,uint8)"(
      subjectStatus: BigNumberish,
      receiverStatus: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReceiverPresentationStatus(
      receiver: string,
      receiverPresentationHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getReceiverPresentationStatus(address,bytes32)"(
      receiver: string,
      receiverPresentationHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSubjectPresentationList(
      subject: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSubjectPresentationList(address)"(
      subject: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSubjectPresentationStatus(
      subject: string,
      subjectPresentationHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSubjectPresentationStatus(address,bytes32)"(
      subject: string,
      subjectPresentationHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _previousPublishedVersion: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address)"(
      _previousPublishedVersion: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    previousPublishedVersion(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "previousPublishedVersion()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    subjectPresentationListRegistry(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "subjectPresentationListRegistry(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    subjectPresentationRegistry(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "subjectPresentationRegistry(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateReceiverPresentation(
      receiverPresentationHash: BytesLike,
      status: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateReceiverPresentation(bytes32,uint8)"(
      receiverPresentationHash: BytesLike,
      status: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateSubjectPresentation(
      subjectPresentationHash: BytesLike,
      status: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateSubjectPresentation(bytes32,uint8)"(
      subjectPresentationHash: BytesLike,
      status: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "version()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}