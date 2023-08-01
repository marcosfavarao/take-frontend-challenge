import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../components/Layouts/DefaultLayout/DefaultLayout'
import { Vehicles } from '../pages/Vehicles/Vehicles'
import { VehiclesSettings } from '../pages/VehiclesSettings/VehiclesSettings'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicles-settings" element={<VehiclesSettings />} />
      </Route>
    </Routes>
  )
}
