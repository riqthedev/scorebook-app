"use client";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import * as z from 'zod';
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import teamSchema from "@/lib/validations/validTeam";
import { Button } from "@/components/ui/button";
import { NextApiRequest, NextApiResponse } from "next";
import playerSchema from "@/lib/validations/validPlayer";

export default function PlayerForm() {
    const form = useForm<z.infer<typeof playerSchema>>({
        resolver: zodResolver(playerSchema),
        defaultValues: {
            playerName: ""
        }
    });


    function onSubmit(values:any) {
        
        console.log(values)
    }



    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="playerName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Player Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Player Name" {...field} />
                            </FormControl>
                            <FormDescription>
                                Name of player.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )} />
                <Button type='submit'>Add</Button>
            </form>
        </Form>


    );

}
