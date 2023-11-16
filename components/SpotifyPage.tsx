import React from 'react'
import { getTopTracks, getNowPlaying } from 'lib/spotify'
import Track from './Track'
import { useEffect, useState } from 'react';

type Song = {
    songUrl: string;
    artist: string;
    title: string
};

type TopTracks = {
    tracks?: Song[];
};

let offset = 0;

function SpotifyPage() {
    const [timeRange, setTimeRange] = useState<string>("short_term")
    const [limit, setLimit] = useState<number>(10)
    const [query, setQuery] = useState<string>("topTracks")
    const [trackData, setTrackData] = useState<any[]>()
    const [nowPlaying, setNowPlaying] = useState<any>()
    const [refresh, setRefresh] = useState<any>(0)
    useEffect(() => {
        async function fetchTrackData() {
            const tracks = await getTopTracks({ limit, offset, time_range: timeRange })
            setTrackData(tracks)
            return tracks
        }

        async function fetchNowData() {
            const nowPlaying = await getNowPlaying()
            setNowPlaying(nowPlaying)
        return nowPlaying
        }

        fetchNowData();
        fetchTrackData();

    }, [query, refresh, limit, offset, timeRange]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const nowPlaying:any = await getNowPlaying()
    //     setTrackData(nowPlaying)
    //     return nowPlaying
    //     }
    //     fetchData();
    // }, [limit, timeRange, query]);

    function handleLimitChange(amount: number) {
        setLimit(amount)
    }

    function handleRangeChange(term: string) {
        setTimeRange(term)
    }

    function handleQueryChange(query: string) {
        setQuery(query)
    }

    function handleRefresh(){
        setRefresh(refresh+1)
    }

    // if (trackData === undefined) { return; }
    return (
        <section id="tracks">
            

            <div className="my-16 pb-12 md:pt-16 md:pb-48">
                <div >
                    <div className={`flex justify-center items-center`}>
                        <input type='radio' name="query" checked={query==="topTracks"} onChange={()=>handleQueryChange("topTracks")} className={"mx-4"}/> Top Tracks
                        <input type='radio' name="query" checked={query==="nowPlaying"} onChange={()=>handleQueryChange("nowPlaying")} className={"mx-4"}/> Now Playing
                    </div>
                    <div className={`flex justify-center items-center ${query==="topTracks"?"":"hidden"}`}>
                        <input type='radio' name="limit" checked={limit===5} onChange={()=>handleLimitChange(5)} className={"mx-4"}/> Five
                        <input type='radio' name="limit" checked={limit===10} onChange={()=>handleLimitChange(10)} className={"mx-4"}/> Ten
                        <input type='radio' name="limit" checked={limit===20} onChange={()=>handleLimitChange(20)} className={"mx-4"}/> Twenty
                    </div>
                    <div className={`flex justify-center items-center ${query==="topTracks"?"":"hidden"}`}>
                        <input type='radio' name="timeRange" checked={timeRange==="short_term"} onChange={()=>handleRangeChange("short_term")} className={"mx-4"}/> Short
                        <input type='radio' name="timeRange" checked={timeRange==="medium_term"} onChange={()=>handleRangeChange("medium_term")} className={"mx-4"}/> Medium
                        <input type='radio' name="timeRange" checked={timeRange==="long_term"} onChange={()=>handleRangeChange("long_term")} className={"mx-4"}/> Long
                    </div>
                    <div className={`flex justify-center items-center ${query==="nowPlaying"?"":"hidden"}`}>
                        <button name="refresh" onClick={()=>handleRefresh() } className={"mx-4"}>Refresh</button>
                    </div>
                    {
                        query==="topTracks"? trackData !== undefined?
                        <div className="flex flex-col space-y-10 items-stretch justify-center align-top">
                            {
                                trackData.map((track: any, index: any) => (<Track ranking={offset + index + 1} key={track.songUrl} {...track} />))
                            }
                        </div>: <div>Error: Top Tracks not Found</div>: query==="nowPlaying"? nowPlaying!==undefined? <Track ranking={1} key={nowPlaying.songUrl} {...nowPlaying} />: <div>Nothing Playing</div> :<div>Error</div>
                    }

                </div>
                

            </div>
        </section>
    )
}

export default SpotifyPage