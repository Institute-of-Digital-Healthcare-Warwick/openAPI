import { IServerVariable } from "../mod.ts";


/**
 * Open API Server object
 * 
 * https://spec.openapis.org/oas/v3.1.0#server-object
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
 export interface IServer {
	/**
	 * A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that the host location is relative to the location where the OpenAPI document is being served. Variable substitutions will be made when a variable is named in {brackets}.
	 * */
	url: string;


	/**
	 * An optional string describing the host designated by the URL. CommonMark syntax MAY be used for rich text representation.
	 */
	description?: string;


	/**
	 * A map between a variable name and its value. The value is used for substitution in the server’s URL template.
	 */
	variables?: {[key: string]: IServerVariable};	
}