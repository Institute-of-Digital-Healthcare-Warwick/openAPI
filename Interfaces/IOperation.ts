import { IReference } from "./IReference.ts";
import { IExternalDocumentation } from "./IExternalDocumentation.ts";
import { IParameter } from "./IParameter.ts";
import { IRequestBody } from "./IRequestBody.ts";
import { IResponse } from "./IResponse.ts";
import { IPathItem } from "./IPathItem.ts";
import { IServer } from "./IServer.ts";


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


	/**
	 * The request body applicable for this operation. The requestBody is fully supported in HTTP methods where the HTTP 1.1 specification [RFC7231] has explicitly defined semantics for request bodies. In other cases where the HTTP spec is vague (such as [GET]section-4.3.1), [HEAD]section-4.3.2) and [DELETE]section-4.3.5)), requestBody is permitted but does not have well-defined semantics and SHOULD be avoided if possible.
	 */
	requestBody?: IRequestBody | IReference;


	/**
	 * The list of possible responses as they are returned from executing this operation.
	 */
	responses?: IResponse;


	/**
	 * A map of possible out-of band callbacks related to the parent operation. The key is a unique identifier for the Callback Object. Each value in the map is a Callback Object that describes a request that may be initiated by the API provider and the expected responses.
	 */
	callbacks?: {[key:string]: IPathItem | IReference};


	/**
	 * 	Declares this operation to be deprecated. Consumers SHOULD refrain from usage of the declared operation. Default value is false.
	 */
	deprecated?: boolean;


	/**
	 * Each name MUST correspond to a security scheme which is declared in the Security Schemes under the Components Object. If the security scheme is of type "oauth2" or "openIdConnect", then the value is a list of scope names required for the execution, and the list MAY be empty if authorization does not require a specified scope. For other security scheme types, the array MAY contain a list of role names which are required for the execution, but are not otherwise defined or exchanged in-band.
	 */
	security: {[key:string]: string};


	/**
	 * An alternative server array to service this operation. If an alternative server object is specified at the Path Item Object or Root level, it will be overridden by this value.
	 */
	servers: IServer[];
}