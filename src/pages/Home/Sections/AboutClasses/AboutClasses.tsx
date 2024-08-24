import icon1 from "../../../../assets/aulas_ao_vivo.svg"
import icon2 from "../../../../assets/study_plan.svg"
import icon3 from "../../../../assets/atividades_diarias.svg"
import icon4 from "../../../../assets/foco_nas_habilidades.svg"
import { Container, Icon, IconsContent, Label, LabelContent } from "./styles"
import Button from "../../../../components/Button/Button"

const AboutClasses = () => {   
  return(
    <Container>
      <h1>Como funcionam as aulas?</h1>
      <IconsContent>
        <LabelContent>
          <Icon src={icon1}></Icon>
          <Label>Aulas ao vivo</Label>
          <h5>Aulas de 1 hora para prática intensiva e imersiva</h5>
        </LabelContent>
        <LabelContent>
          <Icon src={icon2}></Icon>
          <Label>Study Plan</Label>
          <h5>Planos de estudo semanal para maximizar o aprendizado</h5>
        </LabelContent>
        <LabelContent>
          <Icon src={icon3}></Icon>
          <Label>Atividades diárias</Label>
          <h5>Atividades rápidas para a correria do dia a dia</h5>
        </LabelContent>
        <LabelContent>
          <Icon src={icon4}></Icon>
          <Label>Foco nas 4 habilidades</Label>
          <h5>Desenvolva leitura, escrita, fala e escuta para um inglês fluente</h5>
        </LabelContent>            
      </IconsContent>
      <Button
        isPrimary={true}
        label="Saiba Mais!" 
        to={"/aboutClasses"}      
      />
    </Container>
  )
}

export default AboutClasses;