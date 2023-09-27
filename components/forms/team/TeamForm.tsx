"use client";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import * as z from 'zod';
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import teamSchema from "@/validations/validTeam";
import { Button } from "@/components/ui/button";
import { NextApiRequest, NextApiResponse } from "next";

export default function TeamForm() {
    const form = useForm<z.infer<typeof teamSchema>>({
        resolver: zodResolver(teamSchema),
        defaultValues: {
            teamName: ""
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
                    name="teamName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Team Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Team Name" {...field} />
                            </FormControl>
                            <FormDescription>
                                Name your team.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )} />
                <Button type='submit'>Create</Button>
            </form>
        </Form>


    );

}
