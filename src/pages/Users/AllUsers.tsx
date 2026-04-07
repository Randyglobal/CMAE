import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";
import { useState } from "react";

interface User { id: number; name: string; email: string }

export default function AllUsers(){
  const [users] = useState<User[]>([
    { id:1, name: 'John Doe', email: 'john@example.org'},
    { id:2, name: 'Jane Smith', email: 'jane@example.org'},
  ]);

  return (
    <>
      <PageMeta title="CMAE" description="HealthCare" />
      <ComponentCard title="All Users">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-5 py-3 text-left">Name</th>
                <th className="px-5 py-3 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} className="border-b border-gray-100">
                  <td className="px-5 py-3">{u.name}</td>
                  <td className="px-5 py-3">{u.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ComponentCard>
    </>
  )
}
