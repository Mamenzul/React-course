import Card from './Card';
const ListUsers = (props) => {
    const usersInfoJsx = props.Users.map((el) =>{
        return <li key={el.id}>{el.username}({el.age} years old)</li>
    });
    return (
        <Card>
            <ul>
                {usersInfoJsx}
            </ul>
        </Card>
    )
}
export default ListUsers;