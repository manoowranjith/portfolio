import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Typography from '@mui/material/Typography';
export default function CustomizedTimeline() {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    Techcedence
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">

                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography sx={{ backgroundColor: "black", color: "white", p: 0.5 }} variant="h6" component="span">
                        Dec 2023
                    </Typography>
                    <Typography>Software Engineer L2</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    Iamneo
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">

                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography sx={{ backgroundColor: "black", color: "white", p: 0.5 }} variant="h6" component="span">
                        Apr 2022
                    </Typography>
                    <Typography>Software Engineer</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    Kongu Engineering College
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">

                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography sx={{ backgroundColor: "black", color: "white", p: 0.5 }} variant="h6" component="span">
                        Mar 2022
                    </Typography>
                    <Typography>CSE Graduate</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    Iamneo
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">

                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography sx={{ backgroundColor: "black", color: "white", p: 0.5 }} variant="h6" component="span">
                        Jul 2021
                    </Typography>
                    <p></p>
                    <Typography component="span">SWE Intern</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
