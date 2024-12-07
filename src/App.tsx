import './App.css'
import { GraphActivity } from './components/graph-activity/graph-activity'
import {GraphStatistics} from './components/graph-statistics/graph-statistics'
import { RecentOrders } from './components/recent-orders/recent-orders'
import { TableProducts } from './components/table-products/table-products'

export const App = () => {
  return (
    <div className="main">
        {/* <GraphActivity /> */}
        {/* <GraphStatistics /> */}
        <TableProducts />
        <RecentOrders />
    </div>
  )
}