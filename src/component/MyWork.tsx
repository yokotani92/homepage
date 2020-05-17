import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '100%',
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
                        react-three-fiberで作成したグラフィックのギャラリー
                    </Typography>
                    <Typography className={classes.content} variant="body2" component="p">
                        react-three-fiberで作成したグラフィックのギャラリー。
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href="https://yokotani92.github.io/react-three-fiber-gallery/" underline='none'>
                        <Button size="small">VIEW</Button>
                    </Link>
                </CardActions>
            </Card>
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
                    <Link href="https://yokotani92.github.io/dp-visualizer/" underline='none'>
                        <Button size="small">VIEW</Button>
                    </Link>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2">
                        React-Reduxのstarter
                    </Typography>
                    <Typography className={classes.content} variant="body2" component="p">
                        React-Reduxを使ったCount up/ downボタン。
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href="https://yokotani92.github.io/react-redux-starter-app/" underline='none'>
                        <Button size="small">VIEW</Button>
                    </Link>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2">
                        react-three-fiberを使ったページのテスト
                    </Typography>
                    <Typography className={classes.content} variant="body2" component="p">
                        react-three-fiberのサンプルを動かしてみただけ。面白い。
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href="https://yokotani92.github.io/react-three-trial/" underline='none'>
                        <Button size="small">VIEW</Button>
                    </Link>
                </CardActions>
            </Card>
        </div >
    );
}

export default MyWork;
