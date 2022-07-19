import { add, removeItem, updateItem } from "@/api/product";
import useSWR from "swr";

const useProducts = () => {
    const { data, error, mutate } = useSWR("/products");

    // create
    const create = async (item) => {
        const product = await add(item);
        mutate([...data, product]);
    };

    // update
    const update = async (product: any) => {
        await updateItem(product)
        const newProducts = data.map((item: any) => item.id === data.id ? product : item)
        mutate(newProducts)
    };

    // delete
    const remove = async (id) => {
        await removeItem(id);
        const newProducts = data.filter((item) => item.id != id);
        mutate(newProducts);
    };
    return {
        data,
        error,
        create,
        update,
        remove,
    };
};

export default useProducts;
