import { IReference } from "./IReference.ts";
import { IExternalDocumentation } from "./IExternalDocumentation.ts";
import { IParameter } from "./IParameter.ts";


/**
 * Open API Operation object
 * 
 * https://spec.openapis.org/oas/v3.1.0#operation-object
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
 export interface IOperation {
	/**
	 * A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier.
	 * */
	tag?: string[];


	/**
	 * A short summary of what the operation does.
	 */
	summary?: string;


	/**
	 * 	A verbose explanation of the operation behavior. CommonMark syntax MAY be used for rich text representation.
	 */
	description?: string;


	/**
	 * Additional external documentation for this operation.
	 */
	externalDocs?: IExternalDocumentation;


	/**
	 * Unique string used to identify the operation. The id MUST be unique among all operations described in the API. The operationId value is case-sensitive. Tools and libraries MAY use the operationId to uniquely identify an operation, therefore, it is RECOMMENDED to follow common programming naming conventions.
	 */
	operationId?: string;


	/**
	 * A list of parameters that are applicable for this operation. If a parameter is already defined at the Path Item, the new definition will override it but can never remove it. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object’s components/parameters.
	 */
	parameters?: IParameter[] | IReference[];
}