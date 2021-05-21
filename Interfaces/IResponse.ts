import { IReference } from "./IReference.ts";
import { IHeader } from "./IHeader.ts";
import { ILink } from "./ILink.ts";
import { IMediaType } from "./IMediaType.ts";


/**
 * Open API Response  object
 * 
 * https://spec.openapis.org/oas/v3.1.0#response-object
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
export interface IResponse {
	/**
	 * A description of the response. CommonMark syntax MAY be used for rich text representation.
	 */
	description: string;


	/**
	 * Maps a header name to its definition. [RFC7230] states header names are case insensitive. If a response header is defined with the name "Content-Type", it SHALL be ignored.
	 */
	headers?: {[key:string]: IHeader | IReference};


	/**
	 * A map containing descriptions of potential response payloads. The key is a media type or [media type range]appendix-D) and the value describes it. For responses that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*
	 */
	content?: {[key:string]: string | IMediaType};


	/**
	 * A map of operations links that can be followed from the response. The key of the map is a short name for the link, following the naming constraints of the names for Component Objects.
	 */
	links?: {[key:string]: string | ILink | IReference};
}