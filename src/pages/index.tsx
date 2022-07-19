import useProducts from "@/hooks/use-product";
import styles from "../styles/Home.module.css";

const Home = () => {
    const { data: products, error, create, remove, update } = useProducts();
    if (!products) return <div>Loading...</div>;
    if (error) return <div>error</div>;
 
    return (
        <div className={styles.container}>
            {products.map((product, index) => (
                <div key={index}>
                    {product.name} <button onClick={() => remove(product.id)}>Delete</button>
                    <button onClick={() => update({id:12, name: "Product 12 update"})}>Update</button>
                </div>
            ))}
            <button onClick={() => create({ id: 13, name: "Product 13" })}>Create</button>
        </div>
    );
};
export default Home;
