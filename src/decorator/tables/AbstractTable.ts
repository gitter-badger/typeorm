import {getMetadataArgsStorage} from "../../index";
import {TableMetadataArgs} from "../../metadata-args/TableMetadataArgs";

/**
 * Allows to use columns and relations data from the inherited metadata.
 */
export function AbstractTable() {
    return function (target: Function) {
        const args: TableMetadataArgs = {
            target: target,
            name: undefined,
            type: "abstract"
        };
        getMetadataArgsStorage().tables.add(args);
    };
}