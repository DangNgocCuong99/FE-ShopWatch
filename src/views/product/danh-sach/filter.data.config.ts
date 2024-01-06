import { IProductInfo } from "./types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";

export const dataConfig = (): FormSchemaModel<IProductInfo>[] => [
        {
            field: "name",
            label: "Tên san pham",
        },
    ];
