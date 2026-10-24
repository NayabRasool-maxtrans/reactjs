import {
    createColumnHelper, createSortedRowModel,
    tableFeatures, useTable, type ColumnDef, createPaginatedRowModel, rowPaginationFeature, rowSortingFeature,
    createFilteredRowModel,
    columnFilteringFeature,
    globalFilteringFeature,
} from "@tanstack/react-table"
import { useEffect, useState } from "react"


interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    create_date: string,
    update_date: string
}
//tanstac table
const features = tableFeatures({
    //sorting
    rowSortingFeature,
    sortedRowModel: createSortedRowModel(),
    //pagination
    rowPaginationFeature,
    paginatedRowModel: createPaginatedRowModel(),
    //global searching
    columnFilteringFeature,
    globalFilteringFeature,
    filteredRowModel: createFilteredRowModel(),


})
const columnhelper = createColumnHelper<typeof features, User>()
//define table column
const columns: ColumnDef<typeof features, User>[] =
    columnhelper.columns([
        columnhelper.accessor("id", { header: "ID" },),
        columnhelper.accessor("name", { header: "NAME" }),
        columnhelper.accessor("email", { header: "EMAIL" }),
        columnhelper.accessor("phone", { header: "PHONE" }),
        columnhelper.accessor("create_date", { header: "CREATE_DATE" })

    ])

function TanStacKtable() {
    const [users, setusers] = useState<User[]>([])
    const [loading, setloading] = useState(true)
    //searching
    const [globalFilter, setGlobalFilter] = useState("")
    useEffect(() => {
        const fetchuser = async () => {
            try {
                const response = await fetch("http://localhost:3000/users")
                if (!response.ok) {
                    throw new Error('failed to fetch user data')
                }
                const data: User[] = await response.json()
                setusers(data)
                console.log(users)

            }
            catch (error) {
                console.log("failed get the data")
            }
            finally {
                setloading(false)
            }
        }
        fetchuser()


    }, [])

    //CREATE TABLE
    const table = useTable({
        features, columns, data: users, state: {
            globalFilter
        },
        onGlobalFilterChange: (updater) => {
            setGlobalFilter(typeof updater === "function" ? updater(globalFilter) : updater)

        },
        initialState: { pagination: { pageIndex: 0, pageSize: 3 } },
    })



    return (
        <div style={{ overflowX: "auto" }}>
            <h2>user table</h2>
            <div style={{ marginBottom: "15px" }}>
                <input type="text" placeholder="search by name , email,phone" value={globalFilter}
                    onChange={(e) => { setGlobalFilter(e.target.value), table.setPageIndex(0) }}
                    style={{ marginRight: "10px", border: "1px solid #0b40ee", borderRadius: "4px" }} />
                <button onClick={() => { table.setGlobalFilter(globalFilter), table.setPageIndex(0) }}>search</button>
                <button onClick={() => { setGlobalFilter(""), table.setGlobalFilter(""), table.setPageIndex(0) }}>clear</button>
            </div>



            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    {table.getHeaderGroups().map((headergroup) => (
                        <tr key={headergroup.id}>
                            {headergroup.headers.map((header) => (
                                <th key={header.id} style={{
                                    padding: "12px", borderBottom: "2px solid #ccc",

                                }} onClick={header.column.getToggleSortingHandler()}>
                                    {header.column.getIsSorted() === "asc" ? "↑" :
                                        header.column.getIsSorted() === "desc" ? "↓" : ""

                                    }
                                    {header.isPlaceholder ? null : (
                                        <table.FlexRender header={header} />
                                    )}


                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>{table.getRowModel().rows.length === 0 ? (<tr>
                    <td>no user Found</td>
                </tr>) : (table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>{row.getAllCells().map((cell) =>
                        <td key={cell.id}><table.FlexRender cell={cell}></table.FlexRender></td>)}</tr>
                )))
                }

                </tbody>
            </table>
            <br />
            <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>previous</button>
            <span>
                Page {table.state.pagination.pageIndex + 1}
                {" "}of{" "}
                {table.getPageCount()}
            </span>
            <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>nextpage</button>
        </div>
    )


}
export default TanStacKtable