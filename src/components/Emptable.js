import { useEffect, useState } from 'react';

const Emptable = () => {
  const [employeedata, setUsers] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:8081/employeedata')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.log(err))
    }, []);
    return (
      <>       
          <h1>Employee from Database</h1>
          <table border="1" cellPadding="10" cellSpacing="0" width={"90%"} className='table table-hover'>
            <thead>
              <tr className="bg-gray-100">
                <td className="font-bold">Emp-ID</td>
                <td className="font-bold">Emp-Name</td>
                <td className="font-bold">Emp-Age</td>
              </tr>
            </thead>
            {employeedata.map(emp => (
                <tbody>
                  <tr key={emp.ID}>
                    <td>{emp.ID}</td>
                    <td>{emp.Name}</td>
                    <td>{emp.Age}</td>
                  </tr>
                </tbody>         
            ))}
          </table>
      </>
    );
}

export default Emptable
