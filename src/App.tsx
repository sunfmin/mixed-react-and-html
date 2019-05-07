import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Dialog from '@material-ui/core/Dialog';
import Popover from '@material-ui/core/Popover';

import "@blueprintjs/core/lib/css/blueprint.css";

import {
    Popover as BPopover,
    Tooltip as BTooltip,
    Dialog as BDialog,
    Drawer as BDrawer,
    Position as BPosition,
    PopoverPosition as BPopoverPosition,
} from "@blueprintjs/core";


function Material() {
    const [open, setOpen] = useState(false)
    const [innerOpen, setInnerOpen] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [popoverOpen, setPopoverOpen] = useState(false)

    const [popoverAnchor, setPopoverAnchor] = useState<any>(null)


    return (
        <div>
            <button onClick={e => {
                setOpen(!open)
            }}>drawer</button>
            <Drawer anchor="right" open={open} onClose={e => {
                setOpen(false)
            }}>
                <div style={{ "width": "600px" }}>ABC</div>

                <button onClick={e => {
                    setOpen(!innerOpen)
                }}>drawer inner</button>
                <Drawer anchor="bottom" open={innerOpen} onClose={e => {
                    setInnerOpen(false)
                }}>
                    <div style={{ "width": "600px" }}>INNER</div>
                </Drawer>

                <button onClick={e => {
                    setDialogOpen(!dialogOpen)
                }}>dialog</button>
                <Dialog open={dialogOpen} onClose={e => {
                    setDialogOpen(false)
                }}>
                    <div style={{ width: "300px", minHeight: "200px" }}>DEF</div>
                </Dialog>

                <button onClick={e => {
                    setPopoverOpen(!dialogOpen)
                    setPopoverAnchor(e.currentTarget)
                }}>popover</button>
                <Popover open={popoverOpen} onClose={e => {
                    setPopoverOpen(false)
                }} anchorEl={popoverAnchor}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <div style={{ width: "300px", minHeight: "300px" }}>GHIJ</div>
                </Popover>

            </Drawer>


        </div>
    );
}

function Blueprint() {

    const [open, setOpen] = useState(false)
    const [innerOpen, setInnerOpen] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [popoverOpen, setPopoverOpen] = useState(false)

    const [popoverAnchor, setPopoverAnchor] = useState<any>(null)




    return (
        <div>
            <button onClick={e => {
                setOpen(!open)
            }}>drawer</button>
            <BDrawer position={BPosition.RIGHT} isOpen={open} onClose={e => {
                setOpen(false)
            }}>
                <div style={{ "width": "600px" }}>ABC</div>

                <button onClick={e => {
                    setOpen(!innerOpen)
                }}>drawer inner</button>
                <BDrawer position={BPosition.RIGHT} isOpen={innerOpen} onClose={e => {
                    setInnerOpen(false)
                }}>
                    <div style={{ "width": "600px" }}>INNER</div>
                </BDrawer>

                <button onClick={e => {
                    setDialogOpen(!dialogOpen)
                }}>dialog</button>
                <BDialog isOpen={dialogOpen} onClose={e => {
                    setDialogOpen(false)
                }}>
                    <div style={{ width: "300px", minHeight: "200px" }}>DEF</div>
                </BDialog>

                <BPopover isOpen={popoverOpen} onClose={e => {
                    setPopoverOpen(false)
                }} position={BPopoverPosition.AUTO}
                >
                    <button onClick={e => {
                        setPopoverOpen(!dialogOpen)
                        setPopoverAnchor(e.currentTarget)
                    }}>popover</button>

                    <div style={{ width: "300px", minHeight: "300px" }}>GHIJ</div>
                </BPopover>

            </BDrawer>


        </div>
    );
}

export default function App() {
    return (
        <div>
            <Material ></Material>
            <Blueprint></Blueprint>
        </div>
    )
}


