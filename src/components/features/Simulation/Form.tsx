import { PiggyBank } from 'lucide-react'

import { StepProgress } from './Progress';
import { FormStep } from './FormStep';

export const SimulationForm = () => {
  return (
      <>  
      <StepProgress currentStep={1} totalSteps={6} />
      <FormStep icon={PiggyBank} title="Renda Mensal Bruta" question="Quanto é depositado na sua conta todo mês (somando todas as fontes)?" inputProps={{type: 'text', placeholder: 'Ex: R$ 3.000,00', prefix: 'R$'}}/>
      </>
  )
}