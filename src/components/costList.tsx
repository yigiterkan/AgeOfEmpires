import React, { useState } from "react";
import { Slider, Row, Col, InputNumber } from 'antd';
import { useEffect } from 'react';

interface CostListProps {
    onCostChange: any

}

const CostList = (props: CostListProps) => {
    const [checkedWood, setWoodChecked] = useState(false);
    const [checkedFood, setFoodChecked] = useState(false);
    const [checkedGold, setGoldChecked] = useState(false);

    const [woodValue, setWoodValue] = useState();
    const [foodValue, setFoodValue] = useState();
    const [goldValue, setGoldValue] = useState();

    const onWoodChange = (w) => {
        setWoodValue(w);
    };
    const onFoodChange = (f) => {
        setFoodValue(f);
    };
    const onGoldChange = (g) => {
        setGoldValue(g);
    };

    useEffect(() => {
        const unifiedCost = {Wood : woodValue,Food: foodValue,Gold:goldValue}

        props.onCostChange(unifiedCost)

    }, [woodValue, foodValue, goldValue]);

    return (
        <div className='container separate'>
            <p className="header">Costs</p>
            <div>
                <div>
                    <Row>
                        <Col span={3}>
                            <input className="inputCheck" type="checkbox"
                                checked={checkedWood}
                                onChange={() => {
                                    if (checkedWood) {
                                    }
                                    setWoodChecked(!checkedWood)
                                }
                                } />
                            <label>Wood</label>
                        </Col>
                        <Col span={9}>
                            <Row>
                                <Col span={12}>
                                    <Slider
                                        min={0}
                                        max={200}
                                        onChange={onWoodChange}
                                        value={typeof woodValue === 'number' ? woodValue : 0}
                                        disabled={!checkedWood}
                                        step={5}
                                    />
                                </Col>
                                <Col span={4}>
                                    <InputNumber
                                        min={1}
                                        max={200}
                                        style={{ margin: '0 16px' }}
                                        value={woodValue}
                                        onChange={onWoodChange}
                                        disabled={!checkedWood}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col span={3}>
                            <input className="inputCheck" type="checkbox" 
                            checked={checkedFood}
                            onChange={() => {
                                if (checkedFood) {
                                }
                                setFoodChecked(!checkedFood)
                            }
                            }/>
                            <label>Food</label>
                        </Col>
                        <Col span={9}>
                            <Row>
                                <Col span={12}>
                                    <Slider
                                        min={0}
                                        max={200}
                                        onChange={onFoodChange}
                                        value={typeof foodValue === 'number' ? foodValue : 0}
                                        disabled={!checkedFood}
                                        step={5}
                                    />
                                </Col>
                                <Col span={4}>
                                    <InputNumber
                                        min={1}
                                        max={200}
                                        style={{ margin: '0 16px' }}
                                        value={foodValue}
                                        onChange={onFoodChange}
                                        disabled={!checkedFood}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col span={3}>
                            <input className="inputCheck" type="checkbox" 
                            checked={checkedGold}
                            onChange={() => {
                                if (checkedGold) {
                                }
                                setGoldChecked(!checkedGold)
                            }
                            }/>
                            <label>Gold</label>
                        </Col>
                        <Col span={9}>
                            <Row>
                                <Col span={12}>
                                    <Slider
                                        min={0}
                                        max={200}
                                        onChange={onGoldChange}
                                        value={typeof goldValue === 'number' ? goldValue : 0}
                                        disabled={!checkedGold}
                                        step={5}
                                    />
                                </Col>
                                <Col span={4}>
                                    <InputNumber
                                        min={1}
                                        max={200}
                                        style={{ margin: '0 16px' }}
                                        value={goldValue}
                                        onChange={onGoldChange}
                                        disabled={!checkedGold}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
            <br />

        </div>

    )


}
export default CostList;