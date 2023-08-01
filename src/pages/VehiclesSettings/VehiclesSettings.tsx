import { Link } from 'react-router-dom'

import { Input } from './components/Input/Input'

import iconArrowBack from '../../common/assets/svgs/icon-arrow-back.svg'

import {
  VehiclesSettingsContainer,
  VehiclesSettingsHeader,
  VehiclesSettingsContentGrid,
  VehiclesSettingsInfo,
  VehicleInfo,
  AlignFormFields,
} from './VehiclesSettings.styles'

export function VehiclesSettings() {
  return (
    <>
      <VehiclesSettingsContainer>
        <VehiclesSettingsHeader>
          <Link to={'/vehicles'}>
            <img src={iconArrowBack} alt="" title={'Voltar'} />
          </Link>
          <h1>Editar veículo</h1>
        </VehiclesSettingsHeader>

        <VehiclesSettingsContentGrid>
          <VehiclesSettingsInfo>
            <h2>Informações</h2>

            <section>
              <nav>
                <button type="button">Dados do veículo</button>
                <button type="button" disabled>
                  preço médio
                </button>
              </nav>

              <VehicleInfo>
                <div className={'vehicle-properties'}>
                  <h3>Dados do veículo</h3>
                  <AlignFormFields>
                    <li>
                      <div>
                        <input type="checkbox" id="newVehicle" />
                        <label htmlFor="newVehicle">0 km</label>
                      </div>
                      <div>
                        <input type="checkbox" id="secondHandVehicle" />
                        <label htmlFor="secondHandVehicle">Seminovo</label>
                      </div>
                    </li>

                    <li>
                      <Input inputLabel={'Placa'} inputWidth={'9'} />
                      <Input inputLabel={'Renavam'} inputWidth={'9'} />
                    </li>

                    <li>
                      <Input inputLabel={'Marca'} inputWidth={'19'} />
                      <Input inputLabel={'Modelo'} inputWidth={'19'} />
                    </li>

                    <li>
                      <Input inputLabel={'Carroceria'} inputWidth={'19'} />
                      <Input inputLabel={'Ano fabricação'} inputWidth={'9'} />
                      <Input inputLabel={'Ano modelo'} inputWidth={'9'} />
                    </li>

                    <li>
                      <Input inputLabel={'Versão'} inputWidth={'39'} />
                    </li>

                    <li>
                      <Input inputLabel={'Combustível'} inputWidth={'19'} />
                      <Input inputLabel={'Câmbio'} inputWidth={'19'} />
                    </li>

                    <li>
                      <Input inputLabel={'Quilometragem'} inputWidth={'19'} />
                      <Input inputLabel={'Cor'} inputWidth={'19'} />
                    </li>
                  </AlignFormFields>
                </div>

                <div>
                  <h3>Acessórios</h3>
                  <Input inputLabel={'Acessórios'} inputWidth={'39'} />
                </div>

                <div>
                  <h3>Características</h3>
                  <Input inputLabel={'Características'} inputWidth={'39'} />
                </div>

                <div>
                  <h3>Localização</h3>
                  <AlignFormFields>
                    <li>
                      <Input inputLabel={'Estado'} inputWidth={'9'} />
                      <Input inputLabel={'Cidade'} inputWidth={'29'} />
                    </li>
                  </AlignFormFields>
                </div>

                <div>
                  <div className={'vehicle-category'}>
                    <h3>Classificação</h3>

                    <div>
                      <button type={'button'}>A</button>
                      <button type={'button'}>B</button>
                      <button type={'button'}>C</button>
                      <button type={'button'}>D</button>
                      <button type={'button'}>E</button>
                    </div>
                  </div>

                  <div className={'vehicle-condition'}>
                    <h3>Condição geral do veículo</h3>
                  </div>
                </div>
              </VehicleInfo>
            </section>
          </VehiclesSettingsInfo>
        </VehiclesSettingsContentGrid>
      </VehiclesSettingsContainer>
    </>
  )
}
