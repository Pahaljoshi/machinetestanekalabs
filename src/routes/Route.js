import { Navigate } from 'react-router-dom';
import PublicLayout from '../layout/public/Public.Layout';
import Home1 from '../pages/Home1';
import Home2 from '../pages/Home2';

const Routes = () => {
    return [
        {
            path: '/',
            element: <PublicLayout />,
            children: [
                { path: '/', element: <Navigate to="/home1" replace /> },
                { path: '/home1', element: <Home1 /> },
                { path: '/home2', element: <Home2 /> },
                { path: '*', element: <div>404 Not Found</div> }
            ]
        }
    ];
};

export default Routes;