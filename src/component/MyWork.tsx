import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '95%',
        textAlign: 'left',
        marginBottom: 14,
    },
    title: {
        marginBottom: 14,
    },
    content: {
        display: 'inline-block',
        color: "textSecondary",
    },
});

const MyWork: React.FC = () => {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2">
                        DP Visualizer
                </Typography>
                    <Typography className={classes.content} variant="body2" component="p">
                        ナップサック問題のDPテーブルの更新をJSで可視化したやつ。
                </Typography>
                </CardContent>
                <CardActions>
                    <a href="https://yokotani92.github.io/dp-visualizer/">
                        <Button size="small">VIEW</Button>
                    </a>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2">
                        DP Visualizer
                    </Typography>
                    <Typography className={classes.content} variant="body2" component="p">
                        React-Reduxを使ったCount up/ downボタン。
                    </Typography>
                </CardContent>
                <CardActions>
                    <a href="https://yokotani92.github.io/react-redux-starter-app/">
                        <Button size="small">VIEW</Button>
                    </a>
                </CardActions>
            </Card>
        </div>
    );
}

export default MyWork;
