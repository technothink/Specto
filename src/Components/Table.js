import React from 'react';
import TranscribeArea from './TranscribeArea'
import Waveform from './Waveform';
import Footer from './Footer';

const style = {
    display: 'flex',
    margin: '10px',
    height: '300px'
}


const Table = () => (
    <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
        <div className="mdc-card">
            <section className="mdc-card__primary">
                <h1 className="mdc-card__title mdc-card__title--large">Transcribes</h1>
            </section>
            <div style={style}>
                <table className="table table-hoverable">
                    <thead>
                        <tr>
                            <th className="text-left">Agents</th>
                            <th>ID</th>
                            <th>Processed Date</th>
                            <th>Sentiments</th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-left">Vikas Nirala</td>
                            <td>1.59</td>
                            <td>6.0</td>
                            <td>50</td>

                        </tr>
                        <tr>
                            <td className="text-left">Rubal Bhatia</td>
                            <td>1.59</td>
                            <td>2.5</td>
                            <td>35</td>

                        </tr>
                        <tr>
                            <td className="text-left">Manish Nain</td>
                            <td>1.4</td>
                            <td>4.0</td>
                            <td>40</td>

                        </tr>
                        <tr>
                            <td className="text-left">Sonu Bandhan</td>
                            <td>1.7</td>
                            <td>3.0</td>
                            <td>34</td>

                        </tr>
                        <tr>
                            <td className="text-left">Robin Rathi</td>
                            <td>2.49</td>
                            <td>4.0</td>
                            <td>45</td>

                        </tr>
                        <tr>
                            <td className="text-left">Vikas Nirala</td>
                            <td>0.78</td>
                            <td>5.2</td>
                            <td>35</td>

                        </tr>


                    </tbody>
                </table>
                <TranscribeArea />
            </div>
            <div>

                <Waveform src='abc.wav' />
            </div>
            <div>

                <Footer />
            </div>
        </div>
    </div>
);

export default Table;