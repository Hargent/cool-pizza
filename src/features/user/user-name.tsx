import { State } from '../../utils/types/state-types';
import {useSelector} from 'react-redux'

const UserName = () => {
  const userName = useSelector((state:State)=>state.user.userName)
  if(!userName) return null;
    return(<div className=" hidden text-sm font-semibold md:block ">
      <p>{userName}</p>
    </div>
  );
};

export default UserName;
