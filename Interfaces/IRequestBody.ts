import { IMediaType } from "../mod.ts";


/**
 * Open API Request Body object
 * 
 * https://spec.openapis.org/oas/v3.1.0#request-body-object
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
 export interface IRequestBody {
	/**
	 * A brief description of the request body. This could contain examples of use. CommonMark syntax MAY be used for rich text representation.
	 */
	description?: string;


	/**
	 * The content of the request body. The key is a media type or [media type range]appendix-D) and the value describes it. For requests that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*
	 */
	content: {[key:string]: IMediaType};


	/**
	 * Determines if the request body is required in the request. Defaults to false.
	 */
	required?: boolean;	
}