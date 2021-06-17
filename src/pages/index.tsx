import Head from 'next/head';
import SafeEnviroment from '@components/feedback/SafeEnviroment/SafeEnviroment';
import PageTitle from '@components/data-display/PageTitle/PageTitle';

export default function Home() {
  return ( 
    <div>
        <SafeEnviroment/>
        <PageTitle 
          title={'Conheça os profissionais'}
          subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'} />
    </div>
  )
}
