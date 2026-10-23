import { createColumnHelper, tableFeatures, useTable, type ColumnDef } from "@tanstack/react-table"
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
const features = tableFeatures({})
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
    const table = useTable({ features, columns, data: users })



    return (
        <div style={{ overflowX: "auto" }}>
            <h2>user table</h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    {table.getHeaderGroups().map((headergroup) => (
                        <tr key={headergroup.id}>
                            {headergroup.headers.map((header) => (
                                <th key={header.id} style={{
                                    padding: "12px", borderBottom: "2px solid #ccc",

                                }}>
                                    {header.isPlaceholder ? null : (
                                        <table.FlexRender header={header} />
                                    )}
                                    {{
                                        asc: " ▲",
                                        desc: " ▼",
                                    }[
                                        header.column.getIsSorted() as string
                                    ] ?? ""}

                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.length === 0 && (<tr>
                        <td>no user Found</td>
                    </tr>)}
                </tbody>
            </table>

        </div>
    )


}
export default TanStacKtable