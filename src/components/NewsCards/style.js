import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles({
    container: {
        padding: '0 5%',
        width: '100%',
        margin: 0
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '40vh',
        padding: '30px 15px',
        color: 'white'
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        margin: '0 auto'
    }
})

export default styles