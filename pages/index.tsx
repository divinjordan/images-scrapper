import axios from "axios";
import { useEffect, useState } from "react"
import Loading from "../components/loading"
import ModalErrors from "../components/modal-errors";
import { createLoading, closeLoading, catchError } from "../libs/helpers";
import { LoadingType, ElementType, elementDefault, ErrorsType } from "../libs/types"

export default () => {

    const [loading, setLoading] = useState<LoadingType>({});
    const [errors, setErrors] = useState<ErrorsType>({});
    const [element, setElement] = useState<ElementType>(elementDefault);
    const [links, setLinks] = useState<ElementType[]>([])

    const handleChange = (e) : void => {
        const valueChanged: Record<string,string> = { [e.target.name] : e.target.value};
        setElement((values) => ({...values,...valueChanged}))
      }

    const generate = () => {
    }

    const find = () => {
    }

    useEffect(() => {
        axios.get("/api/links").then( res => {
            console.log(res.data);
        }) 
        //.catch( error => catchError(error, setErrors))
    },[]);

    return <div className="max-w-7xl mx-auto my-12">
        <div>
            <div className="flex">
                <input type="text" name="title" onChange={(e) => handleChange(e)} className="px-4 py-2 border border-gray-400 w-full" placeholder="Title" />
                <input type="text" name="value" onChange={(e) => handleChange(e)} x-model="Lien du produit" className="px-4 py-2 border border-gray-400 w-full" placeholder="Value" />
            </div>
            <button onClick={generate} className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md">generate links </button> 
            <button onClick={find} className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md flex space-x-2 items-cener"> 
                <Loading loading={loading} item="find" text="Rechercher" alt="En cours.." />
            </button>

            <div className="border border-blue-400 mt-4 p-4">
                {/* <template x-for="item in links">
                    <div>
                        <h3 className="underline" x-text="item.title"></h3>
                        <div className="bg-cover flex flex-wrap mt-4">
                            <template x-for="image in item.images">
                                <img x-bind:src="image" className="w-[200px] h-[200px]" />
                            </template>
                        </div>
                    </div>
                </template> */}
            </div>

            <div className="mt-8">
                <div className="overflow-x-auto relative">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Titre
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Lien
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <template  x-for=" (link,index) in links">
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <span x-text="link.title"></span>
                                    </th>
                                    <td className="py-4 px-6">
                                        <a x-bind:href="link.value" target="_blank" className="text-blue-400" x-text="link.value"></a>
                                    </td>
                                    <td>
                                        <button className="px-4 py-1.5 text-white bg-orange-800 rounded-md" x-on:click="retirer(index)"> Supprimer</button>
                                    </td>
                                </tr>
                            </template> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>     
        <ModalErrors errors={errors} />
    </div>
}