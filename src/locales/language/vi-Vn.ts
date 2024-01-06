import { Recordable } from "/@/utils";
import { genMessage } from "../helper";

const modules = import.meta.glob('./vi-VN/**/*.ts', { eager: true });
export default {
    ...genMessage(modules as Recordable<Recordable>, 'vi-VN'),
};
