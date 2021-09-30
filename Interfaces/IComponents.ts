import { IExample, IHeader, IJsonSchema, ILink, IParameter, IPathItem, IReference, IRequestBody, IResponse, ISecuritySchema } from "../mod.ts";


/**
 * Open API Components object
 * 
 * https://spec.openapis.org/oas/v3.1.0#components-object
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
export interface IComponents {
	/**
	 * An object to hold reusable Schema Objects.
	 */
	schemas: {[key:string]: IJsonSchema};


	/**
	 * An object to hold reusable Response Objects.
	 */
	responses: {[key:string]: IResponse | IReference};


	/**
	 * An object to hold reusable Parameter Objects.
	 */
	parameters: {[key:string]: IParameter | IReference};


	/**
	 * An object to hold reusable Example Objects.
	 */
	examples: {[key:string]: IExample | IReference};


	/**
	 * An object to hold reusable Request Body Objects.
	 */
	requestBodies: {[key:string]: IRequestBody | IReference};


	/**
	 * An object to hold reusable Header Objects.
	 */
	headers: {[key:string]: IHeader | IReference};


	/**
	 * An object to hold reusable Security Scheme Objects.
	 */
	securitySchemes: {[key:string]: ISecuritySchema | IReference};


	/**
	 * An object to hold reusable Link Objects.
	 */
	links: {[key:string]: ILink | IReference};


	/**
	 * An object to hold reusable Callback Objects.
	 */
	callbacks: {[key:string]: IPathItem | IReference};


	/**
	 * An object to hold reusable Path Item Object.
	 */
	pathItems: {[key:string]: IPathItem | IReference};
}