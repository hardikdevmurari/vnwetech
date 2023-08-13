import PageTitle from "../components/common/PageTitle"
import AngularIcon from '../assets/fontIcon/angular.png'
import AwsIcon from '../assets/fontIcon/aws.png'
import FigmaIcon from '../assets/fontIcon/figma.png'
import FirbaseIcon from '../assets/fontIcon/firbase.png'
import JavaScriptIcon from '../assets/fontIcon/javascript.png'
import MysqlIcon from '../assets/fontIcon/mysql.png'
import NodeIcon from '../assets/fontIcon/node.png'
import PostsqlIcon from '../assets/fontIcon/postsql.png'
import ReactIcon from '../assets/fontIcon/react.png'
import TypeScriptIcon from '../assets/fontIcon/typescript.png'
import BootStrapIcon from '../assets/fontIcon/bootStrap.png'
import HtmlIcon from '../assets/fontIcon/html.png'
import TechCard from "../components/technology/TechCard"


const Technology = () => {
  return (
    <section id={'technology'} className="py-20 px-8 md:px-20">
      <PageTitle name={'technology'} />
      <div className="py-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
        <TechCard icon={ReactIcon} name={'React'} />
        <TechCard icon={AngularIcon} name={'Angular'} />
        <TechCard icon={JavaScriptIcon} name={'Java Script'} />
        <TechCard icon={NodeIcon} name={'Node'} />
        <TechCard icon={TypeScriptIcon} name={'Type Script'} />
        <TechCard icon={FigmaIcon} name={'Figma'} />
        <TechCard icon={AwsIcon} name={'Aws'} />
        <TechCard icon={FirbaseIcon} name={'Firebase'} />
        <TechCard icon={MysqlIcon} name={'My Sql'} />
        <TechCard icon={PostsqlIcon} name={'Post Sql'} />
        <TechCard icon={HtmlIcon} name={'HTML'} />
        <TechCard icon={BootStrapIcon} name={'Bootstrap'} />
      </div>
    </section>
  )
}
export default Technology