function Row(data) {
    data = data.data

    function isnull(value, bool) {
        if (bool === 0) {
            return <td>{value}</td>
        }
        return <td tag='Ae'>{value}</td>
    }


    return (
        <li nr={data.Nr} ku={data.Ku} className='Row'>
            <table>
                <tbody>
                    <tr>
                        <td>{data.St + '.'}</td>
                        {isnull(data.Fa, data.FaAe)}
                        {isnull(data.Le, data.LeAe)}
                        {isnull(data.Ra, data.RaAe)}
                    </tr>
                    <tr>
                        <td className='info' >{data.If}</td>
                    </tr>
                </tbody>
            </table>
        </li>
    );
}

export default Row