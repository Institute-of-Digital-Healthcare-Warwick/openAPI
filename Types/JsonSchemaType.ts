/**
 * Types to be used by properties in schema
 * Types may reflect API native types not necessarily javascript types
 * 
 * The number type is used for any numeric type, either integers or floating point numbers.
 * https://json-schema.org/understanding-json-schema/reference/numeric.html#id5
 * 
 * The integer type is used for integral numbers.
 * https://json-schema.org/understanding-json-schema/reference/numeric.html#integer
 * 
 * array
 * https://json-schema.org/understanding-json-schema/reference/array.html
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
export enum JsonSchemaType {
	string = "string", 
	number = "number", 
	integer = "integer", 
	boolean = "boolean", 
	null = "null", 
	object = "object", 
	array = "array"
}