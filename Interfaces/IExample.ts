/**
 * Open API Example object
 * 
 * https://spec.openapis.org/oas/v3.1.0#example-object
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
export interface IExample {
	/**
	 * Short description for the example.
	 */
	summary?: string;


	/**
	 * Long description for the example. CommonMark syntax MAY be used for rich text representation.
	 */
	description?: string;


	/**
	 * A URI that points to the literal example. This provides the capability to reference examples that cannot easily be included in JSON or YAML documents. The value field and externalValue field are mutually exclusive. See the rules for resolving Relative References.
	 */
	externalValue?: string;
}