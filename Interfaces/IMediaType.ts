import { IEncoding, IExample, IJsonSchema, IJsonSchemaRef, IReference } from "../mod.ts";


/**
 * Open API Media Type object
 * 
 * https://spec.openapis.org/oas/v3.1.0#media-type-object
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
export interface IMediaType {
	/**
	 * The schema defining the content of the request, response, or parameter.
	 */
	schema?: IJsonSchema | IJsonSchemaRef;
	

	/**
	 * 	Example of the parameter’s potential value. The example SHOULD match the specified schema and encoding properties if present. The example field is mutually exclusive of the examples field. Furthermore, if referencing a schema that contains an example, the example value SHALL override the example provided by the schema. To represent examples of media types that cannot naturally be represented in JSON or YAML, a string value can contain the example with escaping where necessary.
	 */
	example?: unknown;


	/**
	 * Examples of the parameter’s potential value. Each example SHOULD contain a value in the correct format as specified in the parameter encoding. The examples field is mutually exclusive of the example field. Furthermore, if referencing a schema that contains an example, the examples value SHALL override the example provided by the schema.
	 */
	examples?: {[key: string]: IExample | IReference};


	/**
	 * A map between a property name and its encoding information. The key, being the property name, MUST exist in the schema as a property. The encoding object SHALL only apply to requestBody objects when the media type is multipart or application/x-www-form-urlencoded.
	 */
	encoding?: {[key: string]: IEncoding};
}