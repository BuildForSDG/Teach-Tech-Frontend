import React from 'react';
import rightTri1 from '../../../assets/righttri_afaaaa.svg';
import rightTri2 from '../../../assets/righttri_817b7b.svg';
import rightTri3 from '../../../assets/righttri_855c5c.svg';
import SideNav from '../../../components/SideNav';
import HeaderNav from '../../../components/HeaderNav';
import {
    BodyWrapper, LowerNav, MainForm
} from './style';

const OtherReq = () => (
    <>
        <SideNav />
        <HeaderNav />

        <BodyWrapper>
            <LowerNav>
                <div>
                    <h5>PERSONAL INFORMATION</h5>
                </div>
                <div>
                    <img src={rightTri1} alt="shape1" />
                    <h5>ACADEMIC INFORMATION</h5>
                </div>
                <div>
                    <img src={rightTri2} alt="shape2" />
                    <h5>OTHER REQUIREMENTS</h5>
                </div>
                <div>
                    <img src={rightTri3} alt="shape3" />
                </div>
            </LowerNav>

            <MainForm>
                <p className="info">
                    Please provide all the important inormation that is partaining to you.Asterix(*)
                    are compulsary fields
                </p>

                <div className="service-convict">
                    <p> Have you finised service? </p>
                    <label className="check-label">
                        <input type="checkbox" name="no-service" value="no-service" />
                        Yes
                    </label>
                    <label className="check-label">
                        <input type="checkbox" name="service" value="service" />
                        No
                    </label>
                    <input
                        className="serial"
                        type="text"
                        maxLength="80"
                        placeholder="Serial Number"
                    />
                </div>

                <textarea
                    rows="8"
                    cols="60"
                    maxLength="500"
                    placeholder="What services have you rendered before? Max 500 words"
                />

                <div className="service-convict">
                    <p> Have you been convicted before? </p>
                    <label className="check-label">
                        <input type="checkbox" name="no-convict" value="no-convict" />
                        Yes
                    </label>
                    <label className="check-label">
                        <input type="checkbox" name="convict" value="convict" />
                        No
                    </label>
                    <input
                        className="serial2"
                        type="text"
                        maxLength="80"
                        placeholder="Serial Number"
                    />
                </div>

                <div className="upload">
                    <input type="file" name="upload" encType="multipart/form-data" />
                </div>
                <button className="submit" type="submit">Submit</button>
            </MainForm>
        </BodyWrapper>

    </>
);

export default OtherReq;
