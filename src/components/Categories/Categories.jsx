import { useEffect, useState } from "react";

function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://run.mocky.io/v3/9bb30d9f-8182-48c6-b03c-8ac3ff8be813").then(
            (res) => {
                return res.json();
            }
        ).then((res) => {
            console.log(res);
            setCategories(res);
        })
    },[])
    return (<div>
        {categories.map((item)=> {
            return(
            <div key={item.id}>{item.name}</div>)
        })}
    </div>)
}

export default Categories;