import { JsonSchemaType } from "../Types/JsonSchemaType.ts";


/**
 * JSON Schema: A Media Type for Describing JSON Documents
 * 
 * non interfaced types null and bool contain no extended properties
 * 
 * https://json-schema.org/draft/2020-12/json-schema-core.html
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
export interface IJsonSchema {	
	/**
	 * Type 
	 * This is also used for validation
	 * 
	 * We are omitting JsonSchemaType array for now to simplify the query
	 * 
	 * https://json-schema.org/understanding-json-schema/reference/generic.html#id2
	 */
	type: JsonSchemaType;


	/**
	 * Description
	 * 
	 * https://json-schema.org/understanding-json-schema/reference/generic.html#id2
	 */
	description?: string;


	/**
	 * Comments are notes that may be striped
	 * 
	 * They are useful for leaving notes to future editors of a JSON schema, (which is quite likely your future self), but should not be used to communicate to users of the schema.
	 * 
	 * https://json-schema.org/understanding-json-schema/reference/generic.html#id3
	 */
	comment?: string;


	/**
	 * Enumerated values
	 * 
	 * https://json-schema.org/understanding-json-schema/reference/generic.html#id4
	 */
	enum?: (string|number|null)[];


	/**
	 * Examples
	 * 
	 * Valid examples that may be useful on UI or for API documentation
	 */
	examples?: string;


	/**
	 * Constant values
	 * 
	 * This is a useful for queries especially in FHIR where resourceType string tells you the resource
	 * 
	 * https://json-schema.org/understanding-json-schema/reference/generic.html#id5
	 */
	const?: string;
}