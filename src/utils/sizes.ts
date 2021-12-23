interface Breakpoints {
  [key: string]: string
}

const breakpoints: Breakpoints = {
  smMob: '321px',
  mdMob: '376px',
  lgMob: '426px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  lgx: '1330px',
  xl: '1920px'
}

const sizes = {
  up(size: string) {
    return `@media only screen and (min-width: ${breakpoints[size]})`
  },
  down(size: string) {
    return `@media only screen and (max-width: ${breakpoints[size]})`
  }
}

export default sizes

/*
export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ISSO

  ${[sizes.up("sm")]} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  OU

  ${[sizes.down("sm")]} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`; 
*/
