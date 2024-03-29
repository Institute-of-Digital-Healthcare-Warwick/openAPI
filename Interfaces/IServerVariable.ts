/**
 * Open API Server Variable object
 * 
 * https://spec.openapis.org/oas/v3.1.0#server-variable-object
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
 export interface IServerVariable {
	/**
	 * An enumeration of string values to be used if the substitution options are from a limited set. The array MUST NOT be empty.
	 * */
	enum?: string;


	/**
	 * The default value to use for substitution, which SHALL be sent if an alternate value is not supplied. Note this behavior is different than the Schema Object’s treatment of default values, because in those cases parameter values are optional. If the enum is defined, the value MUST exist in the enum’s values.
	 */
	default: string;


	/**
	 * An optional description for the server variable. CommonMark syntax MAY be used for rich text representation.
	 */
	description?: string;	
}